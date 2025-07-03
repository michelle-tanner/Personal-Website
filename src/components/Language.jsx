

function Language() {

    function englishClicked() {
        alert("English")
    }
    function chineseClicked() {
        alert("Chinese")
    }

    return (
    <>
        <button className="eng-btn" onClick={englishClicked}>
            en
        </button>
        <p>/</p>
        <button className="chin-btn" onClick={chineseClicked}>
            中文
        </button>
    </>
    )
}

export default Langauge