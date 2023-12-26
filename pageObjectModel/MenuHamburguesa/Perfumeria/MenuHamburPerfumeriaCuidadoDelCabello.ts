import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaCuidadoDelCabello extends BasePage {

    readonly CUIDADO_CABELLO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_CABELLO = this.page.locator('')
    }

    async clickPerfumeriaCuidadoDelCabello(): Promise<void> {
        await this.click(this.CUIDADO_CABELLO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaCuidadoDelCabello(): Promise<void> {
        await this.clickPerfumeriaCuidadoDelCabello()
    }
}
