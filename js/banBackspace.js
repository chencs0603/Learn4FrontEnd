/**
 * Created by chencs on 2017/2/28.
 */
function banBackspace(event) {
    //获取事件对象
    var eventObj = EventUtil.getEvent(event);
    //获取事件的目标
    var target = EventUtil.getTarget(eventObj);
    //获取事件的目标的类型
    var type = target.type;

    var readOnly = target.getAttribute('readOnly');
    readOnly = ( "" == readOnly) ? false : readOnly;
    //按下回退键
    if(8 == EventUtil.getCharCode(eventObj)){
        //事件的目标的类型为密码、文本框等，且为readOnly，则回退键失效
        if(("password" == type || "text" == type || "textarea" == type)
            && ("readonly"== readOnly ? true : false)){
            EventUtil.preventDefault(eventObj);
        }
        //事件的目标的类型不是密码、文本框等，则回退键失效
        if("password" != type && "text" != type && "textarea" != type){
            EventUtil.preventDefault(eventObj);
        }
    }
}
//作用于FireFox、Opera浏览器（未测试）
EventUtil.addHandler(document, "keypress", banBackspace);
//作用于IE、Chrome浏览器
EventUtil.addHandler(document, "keydown", banBackspace);