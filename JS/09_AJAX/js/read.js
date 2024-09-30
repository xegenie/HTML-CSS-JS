let request

document.addEventListener("DOMContentLoaded", function () {
    read()
})

// 게시글 수정화면으로 이동
function update() {
    // 글번호 (no)
    const params = new URLSearchParams(location.search)
    const no = params.get('no')

    location.href = `update.html?no=${no}`
}

// 게시글 조회
function read() {
    request = new XMLHttpRequest()

    // 글번호 (no)
    const params = new URLSearchParams(location.search)
    const no = params.get('no')

    // 요청 설정
    let url = `http://192.168.30.119:8080/board/${no}`

    $.ajax({
        type            : "GET",          
        url             : url, 
        contentType     : "application/json",
        dataType        : "html", 
        succeess: function (response, status) {

                if (response == '') {
                    alert('응답된 데이터가 없습니다.')
                } else {
                    let board = JSON.parse(response)
                    console.log(board);

                    $('#title').val(board.title)
                    $('#writer').val(board.writer)
                    $('#content').val(board.content)
                }


        },
        error: function (xhr, status, error) {
            console.error('상태:', status);
            console.error('에러:', error);
        }
    })
}