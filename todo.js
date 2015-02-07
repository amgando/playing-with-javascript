// make it easier to log stuff
var _ = console.log;
// _('playing with objects');

// _('assertion helpers');
function a(test, msg) { if(!test) throw new Error('\n---\n' + msg + '\n---\n' ) }
function aq(act, exp, msg) { a(act == exp, msg) }
function aqq(act, exp, msg) { a(act === exp, msg) }

// a(false, 'this should blow');
// aq(false, true, 'theezr diffrnt');

;(function(){
  //------------------
  // Models
  //------------------
  function Item(text){
    this.text = text;
    this.cmplete = false;
  }

  Item.prototype.complete = function() {
    this.cmplete = true;
  };

  function TodoList(){
    this.items = [];
  }

  TodoList.prototype.add = function(text) {
    this.items.push(new Item(text));
  };

  TodoList.prototype.edit = function(text, id) {
    if(!index) return;
    this.items[id-1].text = text;
  };

  TodoList.prototype.completeWithId = function(id) {
    if(id < 1 || id > this.items.length) return false;
    this.items[id - 1].complete();
    return true
  };

  TodoList.prototype.delete = function(id) {
    this.items[id-1].delete
  };
  //------------------
  // View
  //------------------
  function ConsoleViewer(){}

  ConsoleViewer.prototype.render = function(content) {
    _(content);
  };

  ConsoleViewer.prototype.renderCollection = function(collection) {
    var __ = function(item,idx){ _((idx+1) + '. [' + (item.cmplete ? 'x' : ' ' )+ '] ' + item.text) };
    collection.forEach(__);
  };

  //------------------
  // Controller
  //------------------
  function Application(){}

  Application.prototype.run = function() {
    var view = new ConsoleViewer;

    var todoList = new TodoList
    todoList.add('buy milk');
    todoList.add('buy milk');

    todoList.completeWithId(1)
    // a(todoList.completeWithId(0), 'this line should blow up');
    view.renderCollection(todoList.items);
    // todoList.delete(1);
  };

  //------------------

  app = new Application;
  app.run();

}())
