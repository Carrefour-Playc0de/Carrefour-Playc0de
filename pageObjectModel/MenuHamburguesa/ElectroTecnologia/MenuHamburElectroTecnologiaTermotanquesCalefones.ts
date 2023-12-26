import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaTermotanquesCalefones extends BasePage {

    readonly TERMOTANQUES_CALEFONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TERMOTANQUES_CALEFONES =this.page.locator('//a [@id="menu-item-category-termontanques-calefones"]')
    }

    async clickElectroTecnologiaTermotanquesCalefones(): Promise<void> {
        await this.click(this.TERMOTANQUES_CALEFONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaTermotanquesCalefones(): Promise<void> {
        await this.clickElectroTecnologiaTermotanquesCalefones()
    }
}
