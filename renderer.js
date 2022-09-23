const information = document.getElementById('info');
information.innerText = `Alex is cool and thanks to Maddie for finding a bug.\nThis app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()}).`;

/*
const func = async () => {
    const response = await window.versions.ping();
    console.log(response); // prints out 'pong'
}
  
func();
*/