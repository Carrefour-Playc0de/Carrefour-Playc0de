import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCalefones extends BasePage {

    readonly CALEFONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CALEFONES =this.page.locator('//a [@id="menu-item-category-calefones-gas"]')
    }

    async clickElectroTecnologiaCalefones(): Promise<void> {
        await this.click(this.CALEFONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCalefones(): Promise<void> {
        await this.clickElectroTecnologiaCalefones()
    }
}
