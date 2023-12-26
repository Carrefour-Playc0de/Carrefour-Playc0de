import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo extends BasePage {

    readonly AFEITADORAS_CORTABARBA_CORTAPELO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.AFEITADORAS_CORTABARBA_CORTAPELO = this.page.locator('//div[contains(text(),\'Afeitadoras, cortabarba y cortapelo\')]')
        this.AFEITADORAS_CORTABARBA_CORTAPELO = this.page.locator('//a [@id="menu-item-category-afeitadoras-cortabarba-cortapelo"]')
    }

    async clickElectroTecnologiaAfeitadorasCortabarbaCortapelo(): Promise<void> {
        await this.click(this.AFEITADORAS_CORTABARBA_CORTAPELO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo(): Promise<void> {
        await this.clickElectroTecnologiaAfeitadorasCortabarbaCortapelo()
    }
}
