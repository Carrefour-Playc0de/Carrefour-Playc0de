import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaHornos extends BasePage {

    readonly HORNOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HORNOS =this.page.locator('//a [@id="menu-item-category-hornos"]')
    }

    async clickElectroTecnologiaHornos(): Promise<void> {
        await this.click(this.HORNOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaHornos(): Promise<void> {
        await this.clickElectroTecnologiaHornos()
    }
}
