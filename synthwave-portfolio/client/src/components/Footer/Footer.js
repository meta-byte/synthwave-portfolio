import React from "react";
var createReactClass = require('create-react-class');

var Footer = createReactClass({
    render: function () {
        return (
            <footer>
                <div class="container-fluid center">
                    <ul class="nav footer-icons center">
                        <li class="nav-item">
                            <a class="nav-link footer-links" href="https://github.com/meta-byte"><i class="devicon-github-plain"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link footer-links" href="https://www.linkedin.com/in/garrett-howard-859007a0/"><i class="fab fa-linkedin"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link footer-links" href="mailto:hylander.garrett@gmail.com?"><i class="fas fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="footer-note">
                    <small class="center"><span>made with <i class="devicon-bootstrap-plain"></i></span></small>
                    <small class="center">designed by me</small>
                </div>
            </footer>
        );
    }
});

export default Footer;