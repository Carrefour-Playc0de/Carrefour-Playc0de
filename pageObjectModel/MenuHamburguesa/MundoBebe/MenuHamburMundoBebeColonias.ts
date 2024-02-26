import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeColonias extends BasePage {

    readonly COLONIAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COLONIAS = this.page.locator('//a [@id="menu-item-category-colonias"]')
    }

    async clickMundoBebeColonias(): Promise<void> {
        await this.click(this.COLONIAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeColonias(): Promise<void> {
        await this.clickMundoBebeColonias()
    }
}
