/**
 * 할일 목록을 저장하는 배열 객체 입니다.
 */
var TO_DO_LIST = new Array();

/**
 * 목록인풋들을 관리하는 큐
 */
var INPUT_OBJ_QUEUE = {
    count : 1,
};

/**
 * 목록인풋하나를 담당하는 객체
 */
function INPUT_OBJECT(){
    this.div = document.createElement('div');
    this.init = function(){ // 초기화
	console.log('목록인풋초기화');
	this.setting(); // 셋팅
	document.getElementById('submit').appendChild(this.div);
    };
    this.setting = function(){ // 셋팅
	console.log('목록인풋셋팅');
	this.div.className = 'inputBlank';
	this.div.id = 'pr_' + INPUT_OBJ_QUEUE.count;
	INPUT_OBJ_QUEUE.count++;
	var input = document.createElement('input');
	input.id = 'toDo';
	input.type = 'text';
	input.placeholder = 'To Do List를 입력하세요.';
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
 * 테이블을 생성하는 객체입니다.
 */
function TABLE_OBJECT(ToDoList){
    this.table = document.createElement('table');
    this.colsNum = ToDoList.length + 1;
    /**
     * 테이블을 초기화 하는 메서드 입니다.
     */
    this.init = function(){ 
	console.log('테이블초기화');
	console.log(this.colsNum + 'X' + this.colsNum);
	this.setting();
	document.getElementById('table').appendChild(this.table);
	document.getElementById('table').className += ' fadeIn';
    }
    /**
     * 테이블을 셋팅하는 메서드 입니다.
     */
    this.setting = function(){
	// 테이블 스타일 설정
	this.table.border = '1';
	// 라인 생성
	for(var i=0; i < this.colsNum; i++){
	    this.genTR(i);
	}
    }
    /**
     * 테이블의 한 라인을 생성하는 메서드 입니다.
     */
    this.genTR = function(lineNum){ 
	var tr = document.createElement('tr');
	for(var i=0; i < this.colsNum; i++){
	    this.genTD(tr, lineNum, i);
	}
	this.table.appendChild(tr);
    }
    /**
     * 테이블의 한 컬럼을 생성하는 메서드 입니다.
     */
    this.genTD = function(tr, lineNum, columnNum){
	var td = document.createElement('td');
	if(lineNum == 0){ // 첫번째 라인이라면,
	    console.log(ToDoList[columnNum]);
	    console.log(tr);
	    if(columnNum == 0){ // 첫번째 컬럼이라면, 
		td.innerText = '';
	    }
	    else{
		td.innerText = ToDoList[columnNum - 1];
	    }
	    
	    
	}
	else{ // 첫번째 라인이 아니라면,
	    if(columnNum == 0){ // 첫번째 컬럼이라면,
		td.innerText = ToDoList[lineNum - 1];
	    }
	}
	tr.appendChild(td);
    }
    /**
     * 테이블의 특정 라인, 특정 컬럼을 색칠하는 메서드 입니다.
     */
    this.setColor = function(lineNum,columnNum){
	this.table.getElementsByTagName('tr')[lineNum].getElementsByTagName('td')[columnNum].id = 'setColor';
    }
    this.init(this.colsNum);
}
/**
* 짝비교를 담당하는 객체 입니다.
*/
function PAIR_RANK(table){
    this.button = document.createElement('input');
    /**
     * 짝비교를 초기화 하는 메서드 입니다.
     */
    this.init = function(){
	this.button.type = 'button';
	this.button.value = '비교시작';
	document.getElementById('table').appendChild(this.button); 
    }
    /**
     * 짝비교를 시작하는 메서드 입니다.
     */
    this.button.onclick = function(e){
	console.log('rankStart()');
	// 테이블의 2행 3컬럼 색칠하기
	console.log(table.table);
	table.setColor(1,2);
    }
    this.init();
}
