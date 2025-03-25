> 该示例解决了web3-react v6无法使用eip6963切换钱包的问题

#### 问题
web-react 在v6版本中对于浏览器注入型钱包只实现了[injected-connector](https://github.com/Uniswap/web3-react/tree/v6/packages/injected-connector)，在此版本发布在[eip-6963](https://eips.ethereum.org/EIPS/eip-6963)之前，故无法实现多钱包切换。
事实上现在还有一些在维护的项目依然在生产环境使用v6版本的库，因为历史包袱重构钱包模块成本又会较大。

#### 解决方案
该实例通过[abstract-connector](https://github.com/Uniswap/web3-react/tree/v6/packages/abstract-connector)实现了一个`EIP6963Connector`,你只需要按照实例所示引入`src/app/eip6963-connector`内容，即可以在不破坏原有代码的基础上完成集成。

#### 相关链接：
- https://github.com/Uniswap/web3-react/tree/v6
- https://eips.ethereum.org/EIPS/eip-6963

---

> This example solves the problem of switching between multiple EIP6963 wallets in web3-react v6
#### Problem
In version v6, web3-react only implemented the [injected-connector](https://github.com/Uniswap/web3-react/tree/v6/packages/injected-connector) for browser-injected wallets. Since this version was released before [eip-6963](https://eips.ethereum.org/EIPS/eip-6963), it's unable to switch between multiple wallets.
In fact, there are still some actively maintained projects using the v6 library in the production environment. Due to historical constraints, the cost of refactoring the wallet module would be relatively high.
#### Solution
This example implements an EIP6963Connector through the [abstract-connector](https://github.com/Uniswap/web3-react/tree/v6/packages/abstract-connector). You just need to import the content from `src/app/eip6963-connector` as shown in the example, and you can complete the integration without disrupting the existing code.
#### Related links:
- https://github.com/Uniswap/web3-react/tree/v6
- https://eips.ethereum.org/EIPS/eip-6963