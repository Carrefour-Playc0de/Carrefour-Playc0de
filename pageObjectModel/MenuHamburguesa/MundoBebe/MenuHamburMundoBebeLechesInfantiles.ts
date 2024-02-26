import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeLechesInfantiles extends BasePage {

    readonly LECHES_INFANTILES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES_INFANTILES = this.page.locator('')
    }

    async clickMundoBebeLechesInfantiles(): Promise<void> {
        await this.click(this.LECHES_INFANTILES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburMundoBebeLechesInfantiles(): Promise<void> {
        await this.clickMundoBebeLechesInfantiles()
    }
}
