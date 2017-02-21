var EventUtil = {

    //指定事件处理程序
    addHandler: function(element, type, handler){
        if (element.addEventListener){
			//DOM2级
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
			//IE
            element.attachEvent("on" + type, handler);
        } else {
			//DOM0级
            element["on" + type] = handler;
        }
    },
    
    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },
    
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    
    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },

    //获取事件对象
    getEvent: function(event){
		//event：DOM，window.event：IE
        return event ? event : window.event;
    },
    
    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    
    },

    //获取事件的目标
    getTarget: function(event){
		//event.target：DOM，event.srcElement：IE
        return event.target || event.srcElement;
    },
    
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },

    //取消事件的默认行为
    preventDefault: function(event){
        if (event.preventDefault){
            //DOM
            event.preventDefault();
        } else {
            //IE
            event.returnValue = false;
        }
    },
	
	//删除事件处理程序
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
			//DOM2级
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
			//IE
            element.detachEvent("on" + type, handler);
        } else {
			//DOM0级
            element["on" + type] = null;
        }
    },
    
    setClipboardText: function(event, value){
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    },

    //取消事件的进一步的捕获或冒泡
    stopPropagation: function(event){
        if (event.stopPropagation){
            //DOM
            event.stopPropagation();
        } else {
            //IE
            event.cancelBubble = true;
        }
    }

};