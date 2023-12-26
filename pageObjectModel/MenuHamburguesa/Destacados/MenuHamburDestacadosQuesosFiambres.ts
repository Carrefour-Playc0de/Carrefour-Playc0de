import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosQuesosFiambres extends BasePage {

    readonly QUESOS_FIAMBRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS_FIAMBRES = this.page.locator('//a [@id="menu-item-category-quesos-fiambres"]')
    }

    async clickDestacadosQuesosFiambres(): Promise<void> {
        await this.click(this.QUESOS_FIAMBRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosQuesosFiambres(): Promise<void> {
        await this.clickDestacadosQuesosFiambres()
    }
}
