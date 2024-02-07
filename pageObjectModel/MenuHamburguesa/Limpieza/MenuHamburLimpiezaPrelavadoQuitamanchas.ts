import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaPrelavadoQuitamanchas extends BasePage {

    readonly PRELAVADO_QUITAMANCHAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PRELAVADO_QUITAMANCHAS = this.page.locator('//a [@id="menu-item-category-prelavado-quitamanchas"]')
    }

    async clickLimpiezaPrelavadoQuitamanchas(): Promise<void> {
        await this.click(this.PRELAVADO_QUITAMANCHAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaPrelavadoQuitamanchas(): Promise<void> {
        await this.clickLimpiezaPrelavadoQuitamanchas()
    }
}
