import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburElectroTecnologia extends BasePage {

    readonly ELECTRO_TECNOLOGIA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ELECTRO_TECNOLOGIA = this.page.locator('//div[contains(text(),\"Electro y tecnología\")]');
    }

    async clickElectroTecnologia(): Promise<void> {
        await this.click(this.ELECTRO_TECNOLOGIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburElectroTecnologia(): Promise<void> {
        await this.clickElectroTecnologia()
    }
}
