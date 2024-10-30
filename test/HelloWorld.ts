// https://hardhat.org/hardhat-runner/docs/advanced/hardhat-runtime-environment
// https://hardhat.org/hardhat-runner/docs/advanced/using-viem
import { viem } from "hardhat";
// https://www.chaijs.com/guide/styles/#expect

import { expect } from "chai";
// https://hardhat.org/hardhat-network-helpers/docs/overview

import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
// https://hardhat.org/hardhat-network-helpers/docs/reference#fixtures

// https://mochajs.org/#getting-started
describe("HelloWorld", function () {

  async function deployContractFixture() {
    
    const publicClient = await viem.getPublicClient();
    const [owner, otherAccount] = await viem.getWalletClients();
    const helloWorldContract = await viem.deployContract("HelloWorld");

    return {
      publicClient,
      owner,
      otherAccount,
      helloWorldContract,
    };
  }

  it("Should give a Hello World", async function () {
    let {helloWorldContract} = await loadFixture(deployContractFixture);
    const helloWorldText = await helloWorldContract.read.helloWorld();
    expect(helloWorldText).to.equal("Hello World")

  });

  it("eyySalaa() function should return 'salaa' string ", async function () {
    let {helloWorldContract} = await loadFixture(deployContractFixture);
    const helloWorldText = await helloWorldContract.read.eyySalaa();
    expect(helloWorldText).to.equal("sala")

  });

  it("Should set owner to deployer account", async function () {
    let {helloWorldContract, owner} = await loadFixture(deployContractFixture);
    let helloWorldDeployer = await helloWorldContract.read.owner();
    expect(helloWorldDeployer.toLocaleLowerCase()).to.equal(owner.account.address)
    
  });

  it("Should not allow anyone other than owner to call transferOwnership", async function () {
    // TODO
    throw Error("Not implemented");
  });

  it("Should execute transferOwnership correctly", async function () {
    // TODO
    throw Error("Not implemented");
  });

  it("Should not allow anyone other than owner to change text", async function () {
    // TODO
    throw Error("Not implemented");
  });

  it("Should change text correctly", async function () {
    // TODO
    throw Error("Not implemented");
  });
});