/**
 * 추가 버튼을 누르면 실행되는 메서드 입니다.
 */
function addInput(){
    console.log("addInput()");
    var div = new INPUT_OBJECT();
    
}

/**
 * 테이블 생성 버튼을 누르면 실행되는 메서드 입니다.
 */
function createTable(){
    console.log('createTable()');

    // To Do List를 사라지게 하는 기능들
    document.getElementById('submit').className += ' fadeOut'; // 페이드 아웃2
    setTimeout(function(){
	document.getElementById('submit').className += ' displayNone'; // 서브밋 가리기
    },2000);
    
    // To Do List를 배열에 쑤셔 넣기
    var inputBlank = document.getElementsByClassName('inputBlank');
    //var temp = new Array();
    for(var i=0; i < inputBlank.length; i++)
    {
	var currentDOM = inputBlank[i];
	TO_DO_LIST.push(inputBlank[i].getElementsByTagName('input')[0].value);
    }
    console.log('To Do Lists are ' + TO_DO_LIST);

    // 배열을 기반으로 테이블을 만들기.
    var table = new TABLE_OBJECT(TO_DO_LIST);

    // 랭크매기기 시작을 하기 위한 버튼 생성
    var rank = new PAIR_RANK(table);

}

document.onkeydown = function(e){
    switch(e.keyCode){
    case 37: // left
	console.log('left key down');
	break;
    case 38: //up
	console.log('up key down');
	break;
    default:
	break;
    }
}