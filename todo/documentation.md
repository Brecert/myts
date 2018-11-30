JSDoc while a universal standard is very very good (in terms of how everything is handled and works) I often do not document code because of the time it may take to set up.

I'm talking about

```js
/*
 * Documentation
 */
```

I may be missing something, but writing that isn't intuitive

Other things that do not make sense are todo and other notes

New documentation comments will simple be above definition of something

Documentation supports base markdown support

```
// Klass is a class example, renamed to Klass to avoid confusion
class Klass {

  // DEPRICATED: Name is confusing, will be moving to `#def` soon
  // TODO: Remove this
  fn() {
  }
  
  // Def defines things
  // It just *works*
  def() {
  }
}
```

This is a very late state project, as the JSDoc format is very good and well supported, and all this does is tweak some things of it.
