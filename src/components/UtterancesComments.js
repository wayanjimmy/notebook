import React from "react";

export default class UtterancesComments extends React.Component {
  constructor(props) {
    super(props);

    this.component = React.createRef();
  }

  componentDidMount(props) {
    const { url } = this.props;
    const scriptElem = document.createElement("script");

    document.head.insertAdjacentHTML(
      "beforeend",
      '<link rel="prefetch" href="https://utteranc.es/client.js" />'
    );
    document.head.insertAdjacentHTML(
      "beforeend",
      '<link rel="preload" href="https://utteranc.es/client.js" as="script" />'
    );

    scriptElem.src = "https://utteranc.es/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";
    scriptElem.setAttribute("repo", "wayanjimmy/notebook");
    scriptElem.setAttribute("issue-term", url);
    scriptElem.setAttribute("label", "blog-comment");
    scriptElem.setAttribute("theme", "github-light");
    scriptElem.id = "u-comments";

    this.component.current.appendChild(scriptElem);
  }

  render() {
    return <section className={this.props.className} ref={this.component} />;
  }
}
