function inputPaste() {
    /* GET INPUT */
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const skill = document.getElementById('skills');

    /*GET OUTPUT */
    const nameOutput = document.getElementById('name-output');
    const ageOutput = document.getElementById('age-output');
    const skillOutput = document.getElementById('skill-output');

    /* overwriting  */
    if (name.value != "" && age.value != "" && skills.value != ""){
        nameOutput.innerHTML = name.value;
        ageOutput.innerHTML = age.value;
        skillOutput.innerHTML = skill.value;
        const result = document.getElementById('result');
        const resultArea = document.getElementById('result-area');
        resultAreaClone = resultArea.cloneNode(true);
        result.appendChild(resultAreaClone);
        resultArea.style.display = 'none';
        resultAreaClone.style.display = 'flex';
    }
    else {
        alert('Por favor, preencha TODOS os dados.');
    }
}
const deletePost = (obj) => {
    const parentPost = obj.parentNode;
    const parentBoostPost = parentPost.parentNode;
    parentBoostPost.removeChild(parentPost);
}
