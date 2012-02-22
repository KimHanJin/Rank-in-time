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
    for(var i=0; i < inputBlank.length; i++)
    {
	var currentDOM = inputBlank[i];
	TO_DO_LIST.push(inputBlank[i].getElementsByTagName('input')[0].value);
    }
    console.log('To Do Lists are ' + TO_DO_LIST);
    
    // 배열을 mongodb에 모두 저장하기(자동완성을 위해서...)
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://wikicore.cafe24.com:4000/saveList', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var json = {};
    json.list = TO_DO_LIST;
    var strJSON = JSON.stringify(json);
    console.log('strJSON = ' + strJSON);
    xmlhttp.send(strJSON);

    // 배열을 기반으로 테이블을 만들기.
    var table = new TABLE_OBJECT(TO_DO_LIST);

    // 랭크매기기 시작을 하기 위한 버튼 생성
    var rank = new PAIR_RANK(table);

}


/**
 * 비교순위결정을 하기 위한 키보드 입력 부분
 */
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

setInterval(function(){
    console.log(new Date())
    document.getElementById('clock').innerText = new Date();
},1000);




window.onload=function() {
    var cnvs = document.getElementById("cnvs");
    if (cnvs.getContext) {
        var ctx = cnvs.getContext('2d');
 
	// 원 그리기
	ctx.beginPath();
	ctx.arc(100, 100, 50, 0, 2*Math.PI, true);
	ctx.fillStyle = '#00F';
	ctx.fill();
	ctx.closePath();
    }
    else alert('canvas를 지원하지 않는 브라우저입니다.');
}