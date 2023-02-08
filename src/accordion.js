
// figure out how to adjust header image



// take in number as id
export default function ShowAnswer() {
    let question = document.getElementById('question_1');
    let answer = document.getElementById('answer_1');
    let chevron = document.getElementById('icon_1');

    // apply changes in question
    // bold type
    // move underline

    question.style.fontWeight = '900';
    question.style.borderBottom = 'none';




    // apply changes in answer
    // add border underline
    // adjust padding 
    answer.style.position = 'relative';
    answer.style.top = '0';
    answer.style.paddingTop = '0';
    answer.style.borderBottom = '1px solid var(--dividers-gray-blue)';





    // apply changes to chevron
    // add padding-left/right
    // add border underline

    chevron.style.border = 'none';
}

