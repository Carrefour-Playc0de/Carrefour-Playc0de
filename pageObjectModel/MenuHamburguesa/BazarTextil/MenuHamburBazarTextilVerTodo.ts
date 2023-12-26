import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilVerTodo extends BasePage {

    readonly BAZAR_TEXTIL_VER_TODO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BAZAR_TEXTIL_VER_TODO = this.page.locator('//span[@class=\'vtex-store-link-0-x-label vtex-store-link-0-x-label--linkHeaderSubmenu\']')
    }

    async clickBazarTextilVerTodo(): Promise<void> {
        await this.click(this.BAZAR_TEXTIL_VER_TODO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilVerTodo(): Promise<void> {
        await this.clickBazarTextilVerTodo()
    }
}
