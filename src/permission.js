import router from '@/router'
import { getToken } from '@/utils/auth'

const WHILE_LIST = ['/login']
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (WHILE_LIST.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
