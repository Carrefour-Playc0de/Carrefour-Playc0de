import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeVerTodos extends BasePage {

    readonly MUNDO_BEBE_VER_TODOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MUNDO_BEBE_VER_TODOS = this.page.locator('//span[@class=\'vtex-store-link-0-x-label vtex-store-link-0-x-label--linkHeaderSubmenu\']')
    }

    async clickMundoBebeVerTodos(): Promise<void> {
        await this.click(this.MUNDO_BEBE_VER_TODOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeVerTodos(): Promise<void> {
        await this.clickMundoBebeVerTodos()
    }
}
