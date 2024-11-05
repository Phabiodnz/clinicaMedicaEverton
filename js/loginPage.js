let funcionalidadeGlobal = 0;

function getFuncionalidade() {
    return funcionalidadeGlobal;
}
function setFuncionalidade() {
    const funcionalidade = document.getElementById("role");
    funcionalidadeGlobal = funcionalidade.value;
}