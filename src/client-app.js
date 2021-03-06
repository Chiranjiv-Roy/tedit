import React from 'react';
import CodeMirror from 'react-codemirror';

var App = React.createClass({
    getInitialState: function() {
        return {
            code: "// Code",
        };
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode,
        });
    },
    render: function() {
        var options = {
            lineNumbers: true,
        };
        return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
    }
});
console.log("I am in client-app.js");
React.render(<App />, document.getElementById('app'));
