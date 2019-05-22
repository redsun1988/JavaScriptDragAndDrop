var oldContainer, newContainer;

function dragstart(item) {
    setTimeout(function() {
        oldContainer = item.parentNode;
        if (item.parentNode)
            item.parentNode.removeChild(item);
    }, 0);
}

function dragenter(args, container) {
    args.preventDefault();
    container.className += " howeredBox";
    newContainer = container; 
}

function dragover(args, container) {
    args.preventDefault();
    newContainer = container; 
}

function drop(args) {
    var item = document.createElement("div");
    item.className = "dragableItem";
    item.setAttribute("draggable", true); 
    document.addEventListener("dragstart", function(){ 
        dragstart(item); 
    });
    newContainer.append(item);
    newContainer.className = "containerBox";
}

function dragleave(container) {
    console.log("dragleave");
    container.className = "containerBox";
    newContainer = oldContainer; 
}
