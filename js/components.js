Vue.component("card", {
  template:
    " <tr> <td>pizza hawuaiana</td><td>1</td><td>maiz,jamon</td><td> 8.999 </td><td>+  -</tr>",
});



var app = new Vue({
    el: "#app",
    data: {
        heading: 'heading 1',
        productos: "lista"
    }
})