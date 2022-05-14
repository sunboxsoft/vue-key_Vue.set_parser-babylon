import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CaculateRate from '@/components/CaculateRate'
import ComprehensicePractise from '@/components/ComprehensicePractise'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/CaculateRate',
        name: 'CaculateRate',
        component: CaculateRate
    }, {
        path: '/ComprehensicePractise',
        name: 'ComprehensicePractise',
        component: ComprehensicePractise
    }]
})