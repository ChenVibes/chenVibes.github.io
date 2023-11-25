'use strict'
const puppeteer = require('puppeteer')

// 主要原理在于使用xpath获取html页面dom元素，脚本代替小手自动触发点击事件
async function giteeUpdate() {
  const browser = await puppeteer.launch({
    // 此处可以使用 false 有头模式进行调试, 调试完注释即可
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://gitee.com/login')

  // 1. 获取账号input，自动输入
  let accountElements = await page.$x('//*[@id="user_login"]')
  //  🚨需要设置为自己的gitee账户🚨
  await accountElements[0].type('magicBegin')

  // 2. 获取密码input，自动输入
  let pwdElements = await page.$x('//*[@id="user_password"]')
  // 🚨需要设置自己的gitee密码🚨
  await pwdElements[0].type('chenzhen8888')

  // 3. 获取登录按钮，触发点击事件
  let loginButtons = await page.$x(
    '//*[@class="git-login-form-fields"]/div[4]/input'
  )
  await loginButtons[0].click()

  // 4. 等待登录成功
  await page.waitForTimeout(1000)
  // 🚨需要设置自己的gitee pages页面🚨
  await page.goto('https://gitee.com/magicBegin/vuepress-blog/pages')

  // 5. 监听触发的确认弹框，并点击确认
  await page.on('dialog', async dialog => {
    console.log('确认更新')
    dialog.accept()
  })

  // 6. 点击更新按钮，并弹出确认弹窗
  let updateButtons = await page.$x('//*[@id="pages-branch"]/div[6]')
  await updateButtons[0].click()

  //7. 轮询并确认是否更新完毕
  while (true) {
    await page.waitForTimeout(15000)
    try {
      // 获取更新状态标签
      deploying = await page.$x('//*[@id="pages_deploying"]')
      if (deploying.length > 0) {
        console.log('更新中...')
      } else {
        console.log('更新完毕')
        break
      }
    } catch (error) {
      break
    }
  }
  await page.waitForTimeout(500)

  // 8.更新完毕，关闭浏览器
  browser.close()
}

giteeUpdate()
