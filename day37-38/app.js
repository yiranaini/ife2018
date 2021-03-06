// 设计
// 在学习完LocalStorage后，我们需要梳理一下业务流程，首先是数据读取，原来是直接使用提供的JS文件，现在我们需要先判断LocalStorage中是否有数据，有的话从LocalStorage中读取，没有的话再使用JS文件中的数据。

// 对于数据的编辑和保存，可以如下实现：

// 给所有input输入框增加一个onblur事件，在事件中增加对于输入内容的判断，是否为正确的数字，是的话什么都不做，不是的话弹出提示框（alert）
// 点击保存的时候，遍历所有input，按照一定顺序，把数据写入LocalStorage中。

// 体验更好的编辑
// 需求
// 如果对于一个强编辑需求的场景，上面的方案可能合适，甚至可以直接上一个Web电子表格组件，但如果对于数据的编辑是小部分的需求场景时，一堆input框看上去就不是那么优雅了。

// 我们希望你实践一下，看上去不是输入框，但鼠标移动上去或者点击就变成一个可编辑的状态。需求如下：

// 把表格恢复成没有input的状态
// 当鼠标滑动过某一个数字的单元格时，数字旁边显示一个铅笔的icon，或者显示灰色的小小的编辑两个字
// 当鼠标点击某个数字的单元格时，这个数字进入编辑状态，单元格内容变成一个输入框，输入框右边是取消和确定
// 点击取消，输入框消失，恢复出原来数字
// 点击确定，输入框消失，数字变成编辑的，这个过程中需要判断输入的正确性，如果输入的不是数字，则弹出提示
// 点击该单元格以外的页面其他任何地方，除了响应对应行为外，同时等同于点击了取消，输入状态消失
// 理论上，同一时刻，只有一个单元格处于编辑状态
// 在输入框中，按ESC键等同于按取消
// 在输入框中，按回车键等同于按确认
// Ajax可选需求
// 需求
// 真正项目中，大部分是通过Ajax和Server通过接口来完成上面的事情，有余力的同学可以通过自己写一个简单的服务代码来学习前后端数据通信的主要方式Ajax。