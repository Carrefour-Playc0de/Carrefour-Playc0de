import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProvCiudAutonoBsAsPartido extends BasePage {

    readonly PARTIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARTIDO = this.page.locator("//span[normalize-space()='PARTIDO']")
    }

    async clickPartido(): Promise<void> {
        await this.click(this.PARTIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAsPartido(): Promise<void> {
        await this.clickPartido()
    }
}
