import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasJugosPolvo extends BasePage {

    readonly JUGOS_POLVO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JUGOS_POLVO = this.page.locator('//a [@id="menu-item-category-jugos-polvo"]')
    }

    async clickBebidasJugosPolvo(): Promise<void> {
        await this.click(this.JUGOS_POLVO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasJugosPolvo(): Promise<void> {
        await this.clickBebidasJugosPolvo()
    }
}
