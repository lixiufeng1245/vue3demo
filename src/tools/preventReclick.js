export default {
    install(Vue) {
        // 防止重复点击 v-preventReclick
        Vue.directive('preventReclick', {
            mounted(el, binding) {
                el.addEventListener('click', () => {
                    if(!el.style.pointerEvents) {
                        el.style.pointerEvents = 'none'
                        setTimeout(() => {
                            el.style.pointerEvents = ''
                        }, binding.value || 3000)
                    }
                })
            }
        })
    }
}