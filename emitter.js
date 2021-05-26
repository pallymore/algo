/*
  * Write an emitter class:
/*
emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
*/

import test from "ava";
import sinon from "sinon";

const { stub } = sinon;

class Emitter {
  registrations = {};

  subscribe(eventName, callback) {
    this.registrations[eventName] = this.registrations[eventName] ?? [];
    this.registrations[eventName].push(callback);

    return {
      release: () => {
        if (!this.registrations[eventName]) return;
        this.registrations[eventName] = this.registrations[eventName].filter(
          (cb) => cb !== callback
        );
      },
    };
  }

  emit(event, ...payload) {
    const callbacks = this.registrations[event] ?? [];
    callbacks.forEach((cb) => cb.call(null, ...payload));
  }
}

test("event emitter", (t) => {
  const em = new Emitter();
  const cb1 = stub();
  const cb2 = stub();
  const s1 = em.subscribe("foo", cb1);
  const s2 = em.subscribe("foo", cb2);
  em.emit("foo", 1, 2, 3);
  t.assert(cb1.callCount === 1);
  t.deepEqual(cb1.lastCall.args, [1, 2, 3]);
  t.assert(cb2.callCount === 1);
  t.deepEqual(cb2.lastCall.args, [1, 2, 3]);

  em.emit("bar");
  t.assert(cb1.callCount === 1);
  t.assert(cb2.callCount === 1);

  s1.release();
  em.emit("foo", "yo");
  t.assert(cb1.callCount === 1);
  t.assert(cb2.callCount === 2);
  t.deepEqual(cb2.lastCall.args, ["yo"]);

  s2.release();
  t.assert(cb1.callCount === 1);
  t.assert(cb2.callCount === 2);
});
