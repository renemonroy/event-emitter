# event-emitter
Library that emits custom events. Ideally a class should inherits it Api `[ on, off, emit ]` instead of using it directly.

## Usage
Just instantiate the eventEmitter class.

```javascript
  var eventEmitter = new EventEmitter();
```

Then bind some events.

```javascript
  eventEmitter.on('start', function(e) {
    console.log('Start event emitted:', e);
  });
```

And dispatch them when you need them.

```javascript
  eventEmitter.emit('start', 'This is a string...');
```

> Emit can send as many arguments and variable types as you want.

To delete events just execute `off`.

```javascript
  eventEmitter.off('start');
```