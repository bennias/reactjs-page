var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Some Example locations to try it</p>
            <ol>
                <li>
                    <Link to='/?location=Miami'>Miami, MA</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
};
module.exports = Examples;