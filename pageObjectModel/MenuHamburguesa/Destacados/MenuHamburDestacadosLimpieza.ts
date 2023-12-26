import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosLimpieza extends BasePage {

    readonly LIMPIEZA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA = this.page.locator('//a [@id="menu-item-category-limpieza"]')
    }

    async clickDestacadosLimpieza(): Promise<void> {
        await this.click(this.LIMPIEZA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosLimpieza(): Promise<void> {
        await this.clickDestacadosLimpieza()
    }
}
