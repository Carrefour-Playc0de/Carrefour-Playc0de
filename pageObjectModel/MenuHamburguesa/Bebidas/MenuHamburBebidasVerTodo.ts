import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasVerTodo extends BasePage {

    readonly BEBIDAS_VER_TODO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BEBIDAS_VER_TODO = this.page.locator('//span[@class=\'vtex-store-link-0-x-label vtex-store-link-0-x-label--linkHeaderSubmenu\']')
    }

    async clickBebidasVerTodo(): Promise<void> {
        await this.click(this.BEBIDAS_VER_TODO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasVerTodo(): Promise<void> {
        await this.clickBebidasVerTodo()
    }
}
