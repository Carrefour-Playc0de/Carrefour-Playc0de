import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosOrganico extends BasePage {

    readonly ORGANICO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ORGANICO = this.page.locator('//div[contains(text(),\'Orgánico\')]')
    }

    async clickDestacadosOrganico(): Promise<void> {
        await this.click(this.ORGANICO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosOrganico(): Promise<void> {
        await this.clickDestacadosOrganico()
    }
}
