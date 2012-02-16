/**
 * 목록하나를 담당하는 객체
 */
function INPUT_OBJECT(){
  this.div = document.createElement('div');
  this.init = function(){ // 초기화
    console.log('초기화');
    this.setting(); // 셋팅
    document.body.appendChild(this.div);
  };
  this.setting = function(){ // 셋팅
    console.log('셋팅');
    this.div.id = 'pr_' + INPUT_OBJ_QUEUE.count;
    INPUT_OBJ_QUEUE.count++;
    var input = document.createElement('input');
    input.type = 'text';
    var button = document.createElement('input');
    button.type = 'button';
    button.name = 'add';
    button.value = '추가';
    button.onclick = addInput;
    this.div.appendChild(input);
    this.div.appendChild(button);
  };
  this.init();
}

/**
 * 목록들을 관리하는 큐
 */
var INPUT_OBJ_QUEUE = {
  count : 1,
};

function addInput(){
  console.log("addInput()");
  var div = new INPUT_OBJECT();

}



function createTable(){
  console.log('createTable()');
}