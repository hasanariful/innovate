// import React from 'react'

// const Heading = (props) => {
// let heading = props.text.replace("#", "<span class='colorSpan'>").replace("#", "</span>")

//   return (<props.as className={props.className} dangerouslySetInnerHTML={{ __html: heading }}></props.as>)
// }

// export default Heading



// for multiple selecting

const Heading = (props) => {
    let pattern = /#([^#]+)#/g
    let findtext = props.text.replace(pattern, "<span class='colorSpan'>$1</span>");

      return (<props.as className={props.className} dangerouslySetInnerHTML={{ __html: findtext }}></props.as>)
    }
    
    export default Heading