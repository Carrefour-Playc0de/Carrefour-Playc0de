import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaTostadorasSandwicheras extends BasePage {

    readonly TOSTADORAS_SANDWICHERAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TOSTADORAS_SANDWICHERAS =this.page.locator('//a [@id="menu-item-category-tostadoras-sangucheras"]')
    }

    async clickElectroTecnologiaTostadorasSandwicheras(): Promise<void> {
        await this.click(this.TOSTADORAS_SANDWICHERAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaTostadorasSandwicheras(): Promise<void> {
        await this.clickElectroTecnologiaTostadorasSandwicheras()
    }
}
