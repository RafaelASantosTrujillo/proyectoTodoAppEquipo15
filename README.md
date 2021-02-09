# 🚀Proyecto final Todo App del Equipo 15 
## ✨Integrantes:
* Rafael Santos
* Pamela Navarro
* Andrea Gutierrez
* Victor Láscares
## 💬Resumen
<p> Lo primero que hicimos fue entender el objetivos y requerimientos  de la aplicación tipo “To Do App”. Los requisitos mìnimos de la aplicaciòn son los siguientes: </p>
<ol>
<li>Como usuario quiero agregar nuevas tareas a la lista.</li>
<li>Como usuario quiero marcar una tarea como completada.</li>
<li>Como usuario quiero eliminar una tarea que no necesite.</li>
</ol>
<p>Posteriormente nos dedicamos a definir las clases y los id de los elementos en un html para ponernos de acuerdo para identificar los elementos y poder dividirnos las tareas. Decidimos que la forma en que se agregarìan las tareas sería en una tabla. </p>
<p>Las validaciones que se agregaron a la aplicación fue que se tenían que agregar mínimo 5 caracteres al añadir la tarea y agregarle una ventana de validación al usuario al presionar el botón de eliminar esa tarea.
</p>
<h3>Algunos problemas</h3>
<p>Las funciones de la aplicación que fueron más complicadas fueron las de "eliminar la tarea" y "marcar tarea como terminada". Esto debido a que no encontrabamos una manera fácil para identificar el renglón que se debía eliminar. Al final lo que decidimos hacer fue utilizar la propiedad "parentNode" de Javascript para partiendo del botón que disparó el click, buscar la fila que lo contiene y borrarla. De esta manera no tuvimos que borrar columna por columna. Para marcar la tarea como terminada utilizamos la misma propiedad. </p>

### [Todo App](https://rafaelasantostrujillo.github.io/proyectoTodoAppEquipo15/ "Todo App en Github pages")
### [Link del video](https://www.youtube.com/watch?v=ds5EMFagLpQ/ "Link del video")