import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaPanHamburguesasPanchos extends BasePage {

    readonly PAN_HAMBURGUESAS_PANCHOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAN_HAMBURGUESAS_PANCHOS = this.page.locator('//a [@id="menu-item-category-pan-hamburguesas-panchos"]')
    }

    async clickPanaderiaPanHamburguesasPanchos(): Promise<void> {
        await this.click(this.PAN_HAMBURGUESAS_PANCHOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaPanHamburguesasPanchos(): Promise<void> {
        await this.clickPanaderiaPanHamburguesasPanchos()
    }
}
