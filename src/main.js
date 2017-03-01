var cm_opt =;

// JAVA EDITOR
var java_box = document.querySelector('#java-textarea');
var java_editor = CodeMirror.fromTextArea(java_box,  {
    mode: 'text/x-java',
    gutter: true,
    lineNumbers: true,
    matchBrackets: true,
    theme: 'hopscotch',
    onChange: function (instance, changes) {
        render();
    }
});
 
// SETTING CODE EDITORS INITIAL CONTENT
java_editor.getDoc().setValue("public static void main(String []args)");


