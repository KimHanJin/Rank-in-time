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
	* 목록인풋들을 관리하는 큐
*/
var INPUT_OBJ_QUEUE = {
	count : 1,
};

/**
	* 테이블을 생성하는 객체
*/
function TABLE_OBJECT(colsNum){
	this.table = document.createElement('table');
	this.colsNum = colsNum;
	this.init = function(colsNum){ // 테이블 초기화
		console.log('테이블초기화');
		console.log(colsNum + 'X' + colsNum);
		this.setting();
		document.getElementById('table').appendChild(this.table);
	}
	this.setting = function(){ // 테이블 셋팅
		this.table.border = '1';
		// 라인 생성
		for(var i=0;i<colsNum;i++){
			this.genTR();
		}
	}
	this.genTR = function(){
		var tr = document.createElement('tr');
		for(var i=0;i<colsNum;i++){
			this.genTD(tr);
		}
		this.table.appendChild(tr);
	}
	this.genTD = function(tr){
		var td = document.createElement('td');
		tr.appendChild(td);
	}
	this.init(colsNum);
}

function addInput(){
	console.log("addInput()");
	var div = new INPUT_OBJECT();
	
}


var temp = new Array();
function createTable(){
	console.log('createTable()');
	var table = new TABLE_OBJECT(3);
	document.getElementById('submit').className += 'displayNone'; // 서브밋 가리기
	
	// To Do List를 배열에 쑤셔 넣기
	var inputBlank = document.getElementsByClassName('inputBlank');
	//var temp = new Array();
	for( i in inputBlank )
	{
		//console.log(inputBlank[i]);
		console.log(i);
		temp.push(inputBlank[i].getElementById('toDo').value);
	}
	console.log(temp);	
}
